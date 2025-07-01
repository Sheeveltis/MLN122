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
  strikeLevel: 0,
  isStriking: false,
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

  setWorkers: (newWorkers) => set((state) => ({ workers: newWorkers })),

  // Recovery actions for workers
  increaseSalary: (workerId) => set((state) => ({
    workers: state.workers.map(w =>
      w.id === workerId
        ? {
            ...w,
            salary: w.salary + 1,
            happiness: Math.min(100, w.happiness + 20),
            strikeLevel: 0,
            isStriking: false,
          }
        : w
    ),
  })),
  reduceHours: (workerId) => set((state) => ({
    workers: state.workers.map(w =>
      w.id === workerId
        ? {
            ...w,
            hours: Math.max(4, w.hours - 1),
            happiness: Math.min(100, w.happiness + 15),
            strikeLevel: 0,
            isStriking: false,
          }
        : w
    ),
  })),
  giveWelfare: (workerId) => set((state) => ({
    workers: state.workers.map(w =>
      w.id === workerId
        ? {
            ...w,
            happiness: Math.min(100, w.happiness + 30),
            strikeLevel: 0,
            isStriking: false,
          }
        : w
    ),
  })),
}))

export default useGameStore 