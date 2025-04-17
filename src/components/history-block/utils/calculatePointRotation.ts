export const calculatePointPosition = (dotCount: number, index: number) => {
    const radius = 265;
    const center = { x: 265, y: 265 }
    const angleDeg = (360 / dotCount) * index;
    const angleRad = (angleDeg - 60) * (Math.PI / 180)
    return {
      x: center.x + radius * Math.cos(angleRad),
      y: center.y + radius * Math.sin(angleRad)
    };
  };