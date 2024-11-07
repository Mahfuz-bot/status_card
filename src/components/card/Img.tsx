function Img({ clientImage }: { clientImage: string }) {
   return (
      <img
         src={clientImage}
         alt="image"
         width={25}
         height={25}
         className="rounded-full"
      />
   )
}

export default Img
