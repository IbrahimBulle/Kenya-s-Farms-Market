// // pages/api/orders.js
// import { NextResponse } from "next/server";
// import connectToDB from "../../../../database/mongodb";
// import Order from "../../model/order"; // ✅ update path based on your structure

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { public_id } = body;
//   console.log(body);
// console.log(public_id);
// if (!public_id) {
//   return NextResponse.json(
//     { success: false, message: "Product ID is required" },
//     { status: 400 }
//   );
// }

// await connectToDB();
// const order = await Order.create({ public_id });


//     return NextResponse.json(
//       {
//         success: true,
//         message: "Order created successfully",
//         order,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("API ERROR:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to create order" },
//       { status: 500 }
//     );
//   }
// }
import connectToDB from "../../../../database/mongodb";
import Order from "../../model/order";
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { product_id, email } = body;
    console.log(product_id);
    // const email =await request.cookies.get('email')?.value;

    if (!product_id || !email) {
      return NextResponse.json({ success: false, message: 'Missing data' }, { status: 400 });
    }

    await connectToDB();
    const order = await Order.create({ product_id, email });

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error('Error creating order:', err);
    return NextResponse.json({ success: false, message: 'Failed to create order' }, { status: 500 });
  }
}
