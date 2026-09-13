import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

export function RouteLoader() {
  return <div className="route-loader" role="status" aria-live="polite"><Ring size="28" stroke="3" bgOpacity="0.2" speed="1.8" color="currentColor" /><span>Carregando página</span></div>
}
