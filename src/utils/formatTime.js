export const formatTime = (totalSeconds) => {
  // 1. Вираховуємо повні хвилини (відкидаємо дробову частину)
  const minutes = Math.floor(totalSeconds / 60);

  // 2. Отримуємо залишок секунд
  const seconds = totalSeconds % 60;

  // 3. Перетворюємо числа на рядки та додаємо нуль, якщо потрібно
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // З'єднуємо все разом через двокрапку
  return `${formattedMinutes}:${formattedSeconds}`;
};
