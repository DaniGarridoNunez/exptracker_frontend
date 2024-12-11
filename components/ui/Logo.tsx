import Image from "next/image"

export default function Logo() {
  return (
    <Image 
        src="/logo.png" 
        alt="Logo ExpTracker" 
        width={500} 
        height={150} 
        className="w-3/4 mx-auto" 
        priority 
    />
  )
}
