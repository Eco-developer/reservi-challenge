import Stripe from 'stripe';
import { NextResponse } from 'next/server';  

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

export async function POST(req, res) {
    try {
        const body = await req.json()
        const { id, price, name, imagen } = body;
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
                quantity: 1,
            },
            ],
            mode: 'payment',
            success_url: `${process.env.COMPLATION_URL}/product/${id}`,
            cancel_url: `${process.env.COMPLATION_URL}/product/${id}`,
            locale: 'es'
        });
        return NextResponse.json({ message: 'Checkout session created successfully', url: session.url });  

    } catch (err) {
        return NextResponse.json({ message: 'Error creating checkout session', error: err.message }, { status: 500 });  
    }
}
