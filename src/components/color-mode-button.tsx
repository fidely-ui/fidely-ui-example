import { ClientOnly, IconButton, Skeleton } from "@fidely-ui/react"
import { useTheme } from "next-themes"
import { FaMoon } from "react-icons/fa"
import { IoSunnyOutline } from "react-icons/io5"

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleTheme}
        size="xs"
        color="inherit"
        variant="ghost"
      >
        {theme === 'light' ? (
          <IoSunnyOutline size={'17px'} />
        ) : (
          <FaMoon size={'17px'} />
        )}
      </IconButton>
    </ClientOnly>
  )
}
