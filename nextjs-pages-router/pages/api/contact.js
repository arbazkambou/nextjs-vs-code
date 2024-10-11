// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res
        .status(500)
        .json({ message: "Only POST requests are allowed", status: "fail" });
    }

    const contactData = JSON.parse(req.body);

    const { data, error } = await supabase
      .from("contact")
      .insert([contactData])
      .select();

    if (error) {
      return res
        .status(500)
        .json({ message: "Could not post your request", status: "fail" });
    }

    res.status(200).json({ message: "Data has been saved", status: "success" });
  } catch (error) {
    return res.status(200).json({ status: "fail", message: error.message });
  }
}
