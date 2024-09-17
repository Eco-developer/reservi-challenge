import Stripe from 'stripe';
import { NextResponse } from 'next/server';  

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

export async function POST(req, res) {
    try {
        const body = await req.json()
        const { quantity, price, name, imagen } = body;
        console.log(body, process.env.STRIPE_PRIVATE_KEY);
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
            {
                price_data: {
                currency: 'cop',
                unit_amount: price,
                product_data: {
                    name,
                    images: [imagen],
                },
                },
                quantity,
            },
            ],
            mode: 'payment',
            success_url: process.env.COMPLATION_URL,
            cancel_url: process.env.COMPLATION_URL,
        });
        console.log(body);
        return NextResponse.json({ message: 'Checkout session created successfully', url: session.url });  

    } catch (err) {
        return NextResponse.json({ message: 'Error creating checkout session', error: err.message }, { status: 500 });  
    }
}
