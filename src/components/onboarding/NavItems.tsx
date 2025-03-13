"use client"
import NavItem from "./NavItem"
import { NavbarProps } from "./Navbar"

const NavItems = ({ sections, activeIndex, setActiveIndex }: NavbarProps) => {
  return (
    <div className="overflow-auto">
      <div className="flex gap-4 h-full w-[650px] transition-all animate-in my-4 border-b-2 ">
        {sections.map((category, i) => {
          const handleCurrentTab = () => {
            setActiveIndex(i)
          }

          const current = i === activeIndex
          return (
            <NavItem
              category={category}
              tabChangeHandler={handleCurrentTab}
              isCurrent={current}
              key={category.label}
            />
          )
        })}
      </div>

    </div>
  )
}

export default NavItems
