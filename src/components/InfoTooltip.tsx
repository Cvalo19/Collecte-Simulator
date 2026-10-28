
import { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function InfoTooltip({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTooltip = () => {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setAlignRight(rect.left + 280 > window.innerWidth - 12);
    }

    setOpen((previous) => !previous);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        display: 'inline-flex',
        verticalAlign: 'middle',
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label="Mostrar ayuda"
        aria-expanded={open}
        onClick={toggleTooltip}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '1px solid #fff',
          background: '#092d9b',
          cursor: 'pointer',
          color: '#fff',
        }}
      >
        ?
      </button>

      
        
<div
  style={{
    position: 'absolute',
    top: '28px',
    ...(alignRight
      ? { right: '0' }
      : { left: '0' }),
    zIndex: 9999,
    width: '280px',
    maxWidth: 'calc(100vw - 24px)',
    boxSizing: 'border-box',
    padding: '16px',
    border: '1px solid #444',
    borderRadius: '10px',
    background: '#18181b',
    color: '#e4e4e7',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',

    opacity: open ? 1 : 0,
    transform: open
      ? 'translateY(0) scale(1)'
      : 'translateY(-5px) scale(0.96)',
    pointerEvents: open ? 'auto' : 'none',
    visibility: open ? 'visible' : 'hidden',
    transition: open
  ? 'opacity 220ms ease-out, transform 220ms cubic-bezier(0.16, 1, 0.3, 1), visibility 0s'
  : 'opacity 160ms ease-in, transform 160ms ease-in, visibility 0s linear 160ms',
  }}
>
  {children}
</div>

     
    </div>
  );
}
