import { useGetPokemonsQuery } from "../../redux/features/apiSlice";

const Pokemon = () => {
    const { data, isLoading, isError, error, isSuccess } = useGetPokemonsQuery();
    return (
            <div className="flex items-center justify-start flex-col gap-8 bg-primary_bg h-screen">
                <h2 className="text-white text-xl text-center">Pokemon Data</h2>
                <div className="bg-form_bg p-8 md:w-8/12 w-[90%] rounded-lg">
                    <h2 className="text-white">In the name of Allah</h2>
                </div>
            </div>
    );
};

export default Pokemon;
