import data from '../../../../data.json'
import ClientPage from '../../components/ClientPage'

// This function runs on the server at build time to generate static paths.
export async function generateStaticParams() {
  // Adjust this to match your data source
  return data.data.map((article: any) => ({

    slug: article.slug,
  }));
}

export default function Page() {
  return <ClientPage />;
}
