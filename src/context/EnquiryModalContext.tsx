import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import EnquiryFormModal from '../components/EnquiryFormModal'

type EnquiryModalContextValue = {
  openEnquiry: () => void
  closeEnquiry: () => void
}

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null)

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(
    () => ({
      openEnquiry: () => setIsOpen(true),
      closeEnquiry: () => setIsOpen(false),
    }),
    [],
  )

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <EnquiryFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </EnquiryModalContext.Provider>
  )
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext)
  if (!context) {
    throw new Error('useEnquiryModal must be used within EnquiryModalProvider')
  }
  return context
}
