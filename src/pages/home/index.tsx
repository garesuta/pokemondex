import ReactLoading from 'react-loading';
import PokemonCard from '../../components/PokemonCard';
import SearchForm from '../../components/SearchForm';
import { usePokemonListStore } from '../../store/pokemonList';

function HomePage() {
    const { pokemon, fetchPokemon } = usePokemonListStore()

    return (
        <div className='w-[90%] m-[auto] max-w-[1100px]'>
            <div className='flex justify-center'>
                <img src='public/images/logo.webp' className='max-h-[80px] mt-[20px]' alt='' />
            </div>
            <div>
                <SearchForm />
                {fetchPokemon.loading &&
                    (<div className='h-[600px] flex justify-center items-center'>
                        <ReactLoading type='spin' color='#fff' />
                    </div>)}
            </div>
            {!fetchPokemon.loading && <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[20px] mt-[40px]'>
                {pokemon.data?.map((item) => {
                    return <PokemonCard image={item.image || ''}
                        name={item.name}
                        id={item.id}
                        types={item.types} />
                })}
            </div>}
        </div>
    )
}

export default HomePage