const useAddCommas = (number) => {
    if(typeof number === 'number'){
        return number.toLocaleString();
    } else {
        throw new Error('input is not a number!');
    }  
}

export default useAddCommas;