export const runtime = "experimental-edge";

export async function getServerSideProps(context) {
  const { shortCode } = context.params;

 
  const protocol = context.req.headers["x-forwarded-proto"] || "http"; 
  const host = context.req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  try {
    const response = await fetch(`${baseUrl}/api/redirect/${shortCode}`);
    const data = await response.json();

    if (response.ok && data.url) {
      return {
        redirect: {
          destination: data.url,
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return {
    props: { shortCode, error: "URL not found" },
  };
}

export default function ShortCodePage({ error }) {
  return (
    <div className="min-h-screen bg-gray-dark-1 flex items-center justify-center">
      <div className="bg-gray-dark-2 p-8 rounded-xl shadow-2xl max-w-md w-full border border-gray-dark-4">
        <h1 className="text-2xl font-bold mb-4 text-yellow-dark-9">Error</h1>
        <p className="text-red-dark-11 mb-4">{error}</p>
        <a
          href="/"
          className="text-yellow-dark-9 hover:text-yellow-dark-10 hover:underline"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
