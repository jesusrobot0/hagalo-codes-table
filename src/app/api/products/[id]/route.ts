import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "GETTING PRODUCT BY ID",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "DELETING PRODUCT BY ID",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "UPDATING PRODUCT BY ID",
  });
}
