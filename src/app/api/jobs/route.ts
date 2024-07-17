import { db } from "@/lib/db";

export default async function GET(req: Request) {
  try {
    const body = await req.json();
    console.log(body);

    const jobs = await db.job.findMany();

    return {
      status: 200,
      body: {
        message: `Jobs fetched successfully`,
        data: jobs,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {
        error: `Internal Server Error`,
      },
    };
  }
}
