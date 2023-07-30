export function handleError(error: any) {
    if (error.includes('ValidationError')) {
        return error.split(': ')[2]
    } else if (error.includes('Cast')) {
        console.log(error)
        return error.split('CastError: ')[1]
    }else {
        return error
    }
}