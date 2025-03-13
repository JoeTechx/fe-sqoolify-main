"use client"
import { useToast } from "@/components/ui/use-toast"
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

interface IObboardingContext {
  updateCompletionState: (item: string) => void
  setActiveIndex: Dispatch<SetStateAction<number>>
  goNextPage: () => {}
  onboarding: {
    label: string
    text: string
    isCompleted: boolean
  }[]
  activeIndex: number
}
export const OnboardingContext = createContext<IObboardingContext>({
  updateCompletionState: (item: string) => {},
  onboarding: [
    {
      label: "Company Information",
      text: "Personal information of the business Owner(s)",
      isCompleted: false,
    },
  ],
  goNextPage: () => ({}),
  activeIndex: 0,
  setActiveIndex: () => {},
})

const OnboardingContextProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast()
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const goNextPage = () => {
    toast({
      variant: "default",
      duration: 3000,
      title: "Success",
      description: "Item saved successfully!",
    })
    setActiveIndex(prev => prev + 1)
    return {}
  }
  const [onboarding, setOnboarding] = useState([
    {
      label: "Company Information",
      text: "Personal information of the business Owner(s)",
      isCompleted: false,
    },
    {
      label: "Owner Information",
      text: "Personal information of the business Owner(s)",
      isCompleted: false,
    },
    {
      label: "Business Documentation",
      text: "Personal information of the business Owner(s)",
      isCompleted: false,
    },
    {
      label: "Setup School",
      text: "Personal information of the business Owner(s)",
      isCompleted: false,
    },
  ])
  // const [onboardingItem, setOnboardingItem] = useState<{label:string, isComplete:boolean}>()

  const updateCompletionState = (item: string) => {
    setOnboarding(prev => {
      prev.forEach(val => {
        if (val.label === item) {
          val.isCompleted = true
        }
      })
      return prev
    })
  }

  const value = {
    updateCompletionState,
    onboarding,
    goNextPage,
    activeIndex,
    setActiveIndex,
  }
  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  )
}

export const useOnboarding = () => {
  const {
    updateCompletionState,
    onboarding,
    goNextPage,
    activeIndex,
    setActiveIndex,
  } = useContext(OnboardingContext)

  return {
    updateCompletionState,
    onboarding,
    goNextPage,
    activeIndex,
    setActiveIndex,
  }
}

export default OnboardingContextProvider
