'use client'
import { createContext, useReducer, ReactNode, useContext } from 'react'

interface AnalyticsState {
	hoverEvents: number
	clickEvents: number
}

type AnalyticsAction = { type: 'HOVER' } | { type: 'CLICK' }

const reducer = (state: AnalyticsState, action: AnalyticsAction): AnalyticsState => {
	switch (action.type) {
		case 'HOVER':
			return { ...state, hoverEvents: state.hoverEvents + 1 }
		case 'CLICK':
			return { ...state, clickEvents: state.clickEvents + 1 }
		default:
			return state
	}
}

const AnalyticsContext = createContext<{
	state: AnalyticsState
	dispatch: React.Dispatch<AnalyticsAction>
} | null>(null)

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, { hoverEvents: 0, clickEvents: 0 })

	return (
		<AnalyticsContext.Provider value={{ state, dispatch }}>{children}</AnalyticsContext.Provider>
	)
}

export const useAnalytics = () => {
	const context = useContext(AnalyticsContext)
	if (!context) throw new Error('useAnalytics must be used within a Provider')
	return context
}
