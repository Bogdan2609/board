# JCA 6×6 — контракт для будущей интеграции Stake Engine RGS

## Что работает в данном патче
Storybook гоняет **только синтетические локальные события** через тот же
`assertJcaBookEvents` / `playBookEvents`, который используется и при реальном
воспроизведении книги. Это QA анимаций, HUD, сценариев победы/проигрыша,
управления ставкой и безопасного подтверждения авто-тестов. Генерация
выплат, RTP, денег, спинов на клиенте отсутствует.

## Последовательность для продакшена (не реализована этим патчем)
1. В math-sdk определить 6 барабанов × 6 видимых строк; в FE книге 6 колонок
   по 8 символов с верхним и нижним скрытыми. Согласовать индикацию x5,
   scatter, winInfo и правила каскадов; не использовать исходные 6×5 книги.
2. Описать действительные режимы BASE / ANTE*, цену каждого, правила,
   paytable, RTP, max win, autoplay restrictions; без math/config режимы ANTE
   остаются только макетами UI.
3. Генерировать книги с последовательными индексами и достаточными данными
   для reveal, winInfo, tumbleBoard, setTotalWin, finalWin, free-spin events.
   Вся информация в клиентской анимации должна происходить из книги.
4. Выполнить симуляции/оптимизацию, проверить распределения и payoutMultiplier;
   сформировать config.json, config_fe.json, config_math.json, compressed
   books JSONL.ZST, lookup CSV и index.json с cost / filenames по режимам.
5. Загрузить и проверить математическую версию через предусмотренный процесс
   Engine/ACP; только тогда связать браузер с соответствующим RGS game/version.
6. Клиент должен использовать штатный SDK stateBet/config/session и actor,
   получать доступные уровни ставки из авторизационного ответа RGS, а не из
   QA-массива; отображать серверные wallet/balance, win, currency и версию.
   Реальная bet/play и авто-ставки идут ТОЛЬКО по штатному SDK/RGS пути.
7. На входе реальных книг проверять формы событий (6×8, позиции row 1..6),
   допустимые символы/множители и согласованность сумм; некорректные данные
   должны останавливать показ, а не конвертироваться с 6×5 «по месту».
8. Отдельно реализовать режим replay через штатный /bet/replay endpoint:
   replay=true отключает ставки и любые авторизованные session calls, оставляет
   отображение win и кнопку повторного проигрывания; проверить все режимы.
9. QA перед публикацией: loss, base win, multi-cascade win, scatter -> free
   spins -> end, x5 multiplier, max win; все валюты/языки, bet levels,
   mobile/fullscreen, disabled states, auto-confirmation и stop; убедиться,
   что реальные запросы соответствуют документации.

**Граница безопасности:** `VITE_JCA_6X6_MATH_VERIFIED=true` — лишь внешний
ручной предохранитель после аудита, а не математическая/серверная проверка.
Флаг не доказывает готовность math или соответствие RGS. Не включать его,
пока подготовленные книги, версии и конфигурация реально не проверены.

Документация Stake Engine:
- https://stake-engine.com/docs/front-end/flowchart
- https://stake-engine.com/docs/front-end/adding-new-events
- https://stake-engine.com/docs/math/game-state-structure/events
- https://stake-engine.com/docs/math/source-files/outputs
- https://stake-engine.com/docs/math/math-file-format
- https://stake-engine.com/docs/approval-guidelines/front-end-communication
- https://stake-engine.com/docs/approval-guidelines/game-replay-requirements
