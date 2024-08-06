export const useUtils = () => {
  const sayHello = () => console.log("useUtils hello")
  
  return {
    sayHello,
  }
}