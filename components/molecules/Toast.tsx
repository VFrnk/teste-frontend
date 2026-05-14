import React, { useEffect } from 'react';
import { Toast } from '@/types/ToastType';
import {
  CheckCircle,
  XCircle,
  Info,
  AlertTriangle,
  X
} from 'lucide-react';

const iconMap = {
  success: <CheckCircle className="text-green-500" />,
  error: <XCircle className="text-red-500" />,
  info: <Info className="text-blue-500" />,
  warning: <AlertTriangle className="text-amber-500" />,
};

const borderMap = {
  success: 'border-green-500',
  error: 'border-red-500',
  info: 'border-blue-500',
  warning: 'border-amber-500',
};

interface ToastItemProps {
  toast: Toast;
  onClose: (id: number) => void;
}

export const ToastItem: React.FC<ToastItemProps> = ({ toast, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(toast.id), toast.duration || 5000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  return (
    <div className={`
      relative flex items-start w-80 p-4 mb-4 rounded-lg shadow-lg bg-white dark:bg-zinc-800 
      border-l-4 ${borderMap[toast.type]} 
      animate-in slide-in-from-right-full duration-300
    `}>
      <div className="flex-shrink-0 mr-3">
        {iconMap[toast.type]}
      </div>

      <div className="flex-1 mr-2">
        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{toast.title}</h4>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{toast.message}</p>
      </div>

      <button
        onClick={() => onClose(toast.id)}
        className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
      >
        <X size={16} />
      </button>

      <div className="absolute bottom-0 left-0 h-1 bg-zinc-200 dark:bg-zinc-700 w-full overflow-hidden rounded-b-lg">
        <div
          className={`h-full opacity-60 ${toast.type === 'success' ? 'bg-green-500' :
            toast.type === 'error' ? 'bg-red-500' :
              toast.type === 'info' ? 'bg-blue-500' : 'bg-amber-500'}`}
          style={{
            animation: `shrink ${toast.duration || 5000}ms linear forwards`
          }}
        />
      </div>
    </div>
  );
};