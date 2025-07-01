import { create } from 'zustand'

let workerId = 1
let machineId = 1

const createWorker = () => ({
  id: workerId++,
  health: 100,
  happiness: 100,
  salary: 1,
  hours: 8,
  productivity: 1.0,
})

const createMachine = () => ({
  id: machineId++,
  durability: 100,
  productivity: 2.0,
})

const useGameStore = create((set, get) => ({
  gold: 6,
  buildings: 1,
  workers: [],
  machines: [],

  buyWorker: () => set((state) => {
    if (state.gold < 1) return state
    return {
      gold: state.gold - 1,
      workers: [...state.workers, createWorker()],
    }
  }),

  buyMachine: () => set((state) => {
    if (state.gold < 2) return state
    return {
      gold: state.gold - 2,
      machines: [...state.machines, createMachine()],
    }
  }),

  buyBuilding: () => set((state) => {
    if (state.gold < 3) return state
    return {
      gold: state.gold - 3,
      buildings: state.buildings + 1,
    }
  }),

  addGold: (amount) => set((state) => ({ gold: state.gold + amount })),
}))

export default useGameStore 