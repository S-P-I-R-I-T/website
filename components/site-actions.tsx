"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type SiteActionsContextValue = {
  showAlert: (message: string) => void;
};

const SiteActionsContext = createContext<SiteActionsContextValue | null>(null);

export function SiteActionsProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const showAlert = (nextMessage: string) => {
    setMessage(nextMessage);
    setIsOpen(true);
  };

  const closeAlert = () => {
    setIsOpen(false);
  };

  return (
    <SiteActionsContext.Provider value={{ showAlert }}>
      {children}
      <div
        id="Alert"
        className={`${isOpen ? "flex" : "hidden"} fixed inset-0 z-[200] items-center justify-center bg-black/60`}
        aria-hidden={!isOpen}
      >
        <div className="w-80 max-w-[90%] rounded-xl bg-[#2a2b2e] p-6 text-center text-white shadow-lg">
          <p id="AlertMessage" className="text-base leading-6">
            {message}
          </p>
          <button
            id="AlertClose"
            type="button"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            onClick={closeAlert}
          >
            확인
          </button>
        </div>
      </div>
    </SiteActionsContext.Provider>
  );
}

export function useSiteActions() {
  const context = useContext(SiteActionsContext);

  if (!context) {
    throw new Error("useSiteActions must be used within SiteActionsProvider");
  }

  return context;
}