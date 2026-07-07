import HolaFooter from "@/components/HolaFooter"

export default function HolaLayout({ children }) {
  return (
    <>
      {children}
      <HolaFooter />
    </>
  )
}
