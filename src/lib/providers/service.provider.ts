'use client'
import { createContext, useContext } from 'react'

const cockpitRunningSince = Date.now()

export default class ServiceProvider {
  constructor() {}

  async init() {
    console.log('initializing the ServiceProvider')
  }
}

const serviceProvider = new ServiceProvider()
serviceProvider.init()

export const ServiceProviderContext = createContext<ServiceProvider>(serviceProvider)
export const useServiceProvider = () => {
  const context = useContext(ServiceProviderContext)
  if (!context) {
    throw new Error('Please wrap the component with ServiceProvider.Provider before using this hook.')
  }
  return context
}
export const ServiceProviderInstance = serviceProvider
