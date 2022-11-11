const configs: {
    state: {
        [key: string]:string
    }
} = {
    state: {
        primary: "border-2 border-transparent bg-blue hover:bg-darkblue focus:bg-darkblue active:bg-darkblue text-white",
        secondary: "border-2 border-light-blue hover:border-transparent bg-soft-blue hover:bg-soft-gray focus:bg-soft-gray active:bg-soft-gray text-darkblue",
        alternative: "",
        disabled: "border-2 border-transparent bg-soft-gray text-gray",
        loading: "border-2 border-transparent bg-soft-gray text-gray",
    }
}

export default configs