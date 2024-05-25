"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

function ContactDetail({ params }) {
  const serachParams = useSearchParams();
  const { id } = params;
  const name = serachParams.get("name");
  const age = serachParams.get("age");
  console.log(id, name, age);
  return <div>ContactDetail</div>;
}

export default ContactDetail;
