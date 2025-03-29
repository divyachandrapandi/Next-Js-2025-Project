import Image from 'next/image';
import SearchForm from '@/app/components/SearchForm';

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;

    return (
        <>
            <section className={ 'pink_container' }>
                {/* Heading and sub heading */ }

                <h1 className={ 'heading text-xl' }>Pitch Your Startup
                    <br /> Connect With Entrepreneurs </h1>

                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                    Competitions.
                </p>

                {/* Search Form */ }
                <SearchForm query={ query } />

            </section>
        </>
    );
}
