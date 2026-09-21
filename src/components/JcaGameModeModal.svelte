<script lang="ts">
    /** UI data only. Populate financial values from the game's actual approved configuration. */
    export type GameModeOption = {
        key: string;
        title: string;
        description: string;
        details?: string[];
        cost?: string;
        rtp?: string;
        maxWin?: string;
        disabled?: boolean;
    };

    export type GameModeModalLabels = {
        heading: string;
        detailsHeading: string;
        cost: string;
        rtp: string;
        maxWin: string;
        confirm: string;
        close: string;
        unavailable: string;
    };

    type Props = {
        open: boolean;
        modes: GameModeOption[];
        labels: GameModeModalLabels;
        currentModeKey: string;
        onclose: () => void;
        onselect: (mode: GameModeOption) => void;
    };

    let { open, modes, labels, currentModeKey, onclose, onselect }: Props = $props();
    let selectedKey = $state(currentModeKey);
    let dialogElement: HTMLElement;
    let previousFocus: HTMLElement | null = null;
    const selectedMode = $derived(
        modes.find((mode) => mode.key === selectedKey) ??
        modes.find((mode) => !mode.disabled) ?? modes[0]
    );

    // A tentative selection never changes the active game mode until explicitly confirmed.
    $effect(() => {
        if (open) {
            previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            selectedKey = currentModeKey;
            queueMicrotask(() => dialogElement?.focus());
        } else if (previousFocus) {
            const target = previousFocus;
            previousFocus = null;
            queueMicrotask(() => target.focus());
        }
    });

    function handleWindowKeydown(event: KeyboardEvent) {
        if (!open) return;
        if (event.key === 'Escape') {
            event.preventDefault();
            onclose();
        }
        if (event.key !== 'Tab' || !dialogElement) return;
        const buttons = Array.from(dialogElement.querySelectorAll<HTMLButtonElement>('button:not(:disabled)'));
        if (!buttons.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogElement)) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    function confirm() {
        if (selectedMode && !selectedMode.disabled) onselect(selectedMode);
    }
</script>

<svelte:window onkeydown={handleWindowKeydown} />

{#if open}
    <div class="jca-modal-root">
        <button class="jca-modal-scrim" type="button" aria-label={labels.close} onclick={onclose}></button>
        <section
            class="jca-book"
            role="dialog"
            aria-modal="true"
            aria-label={labels.heading}
            tabindex="-1"
            bind:this={dialogElement}
        >
            <img
                class="book-art"
                src="/assets/jca/ui/game_mode_modal_static_v1.png"
                alt=""
                aria-hidden="true"
                draggable="false"
            />

            <div class="book-page page-left">
                <h2>{labels.heading}</h2>
                <div class="mode-list" role="group" aria-label={labels.heading}>
                    {#each modes as mode (mode.key)}
                        <button
                            type="button"
                            class="mode-card"
                            class:selected={selectedMode?.key === mode.key}
                            disabled={mode.disabled}
                            aria-pressed={selectedMode?.key === mode.key}
                            onclick={() => (selectedKey = mode.key)}
                        >
                            <span class="selected-jade" aria-hidden="true"></span>
                            <span class="mode-card-name">{mode.title}</span>
                            {#if mode.disabled}<small>{labels.unavailable}</small>{/if}
                        </button>
                    {/each}
                </div>
            </div>

            <div class="book-page page-right">
                {#if selectedMode}
                    <h2>{selectedMode.title}</h2>
                    <div class="mode-description" aria-live="polite">
                        <p>{selectedMode.description}</p>
                        {#if selectedMode.details?.length}
                            <ul>
                                {#each selectedMode.details as detail, index (index)}
                                    <li>{detail}</li>
                                {/each}
                            </ul>
                        {/if}
                        {#if selectedMode.cost}
                            <p class="mode-data"><span>{labels.cost}</span><strong>{selectedMode.cost}</strong></p>
                        {/if}
                        {#if selectedMode.rtp}
                            <p class="mode-data"><span>{labels.rtp}</span><strong>{selectedMode.rtp}</strong></p>
                        {/if}
                        {#if selectedMode.maxWin}
                            <p class="mode-data"><span>{labels.maxWin}</span><strong>{selectedMode.maxWin}</strong></p>
                        {/if}
                    </div>
                    <button
                        type="button"
                        class="confirm-button"
                        disabled={selectedMode.disabled}
                        onclick={confirm}
                    ><span>{labels.confirm}</span></button>
                {/if}
            </div>

            <button class="close-button" type="button" aria-label={labels.close} onclick={onclose}>
                <img src="/assets/jca/ui/modal_close_static_v1.png" alt="" aria-hidden="true" draggable="false" />
            </button>
        </section>
    </div>
{/if}

<style>
    .jca-modal-root {
        position: fixed;
        inset: 0;
        z-index: 100000;
        display: grid;
        place-items: center;
        isolation: isolate;
        font-family: system-ui, sans-serif;
        color: #392416;
    }
    .jca-modal-scrim {
        position: absolute;
        inset: 0;
        border: 0;
        background: rgb(8 5 4 / 72%);
        cursor: default;
    }
    .jca-book {
        position: relative;
        width: min(94vw, 1230px, 135dvh);
        aspect-ratio: 3 / 2;
        outline: none;
        filter: drop-shadow(0 12px 18px rgb(0 0 0 / 48%));
        flex-shrink: 0;
    }
    .book-art { display: block; width: 100%; height: 100%; user-select: none; pointer-events: none; }
    .book-page {
        position: absolute;
        top: 17%;
        height: 56.5%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 0.3% 0.45%;
        box-sizing: border-box;
        font-size: clamp(11px, 1.15vw, 17px);
    }
    .page-left { left: 15.2%; width: 32.8%; }
    .page-right { left: 52.1%; width: 33.8%; }
    h2 {
        text-align: center;
        font-size: 1.14em;
        line-height: 1.15;
        margin: 0 0 0.55em;
        font-weight: 800;
        letter-spacing: 0.015em;
        color: #3c2818;
    }
    .mode-list {
        min-height: 0;
        flex: 1;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 0.42em;
        padding: 0.15em 0.24em 0.24em;
        scrollbar-width: thin;
    }
    /* CSS nine-slice: only center/edges are stretched; approved bronze corner art stays intact. */
    .mode-card {
        position: relative;
        isolation: isolate;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        gap: 0.4em;
        width: 100%;
        min-height: 3.3em;
        padding: 0.34em 0.8em 0.34em 2.80em;
        border: 0;
        background: transparent;
        color: #f7dfab;
        font: inherit;
        font-weight: 750;
        text-align: left;
        text-shadow: 0 1px 1px #271409;
        cursor: pointer;
    }
    .mode-card::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border: 12px solid transparent;
        border-image-source: url('/assets/jca/ui/game_mode_card_static_v1.png');
        border-image-slice: 72 110 72 110 fill;
        border-image-width: 12px 18px 12px 18px;
        border-image-repeat: stretch;
        pointer-events: none;
    }
    .mode-card:hover:not(:disabled)::before { filter: brightness(1.12); }
    .mode-card.selected::before { filter: brightness(1.16) drop-shadow(0 0 2px rgb(32 118 95 / 65%)); }
    .mode-card.selected:hover:not(:disabled)::before { filter: brightness(1.22) drop-shadow(0 0 3px rgb(32 118 95 / 80%)); }
    .selected-jade {
        position: absolute;
        left: 7.5%;
        top: 50%;
        width: 0.66em;
        height: 0.66em;
        border-radius: 50%;
        transform: translateY(-50%);
        border: 1px solid #d9ba69;
        background: radial-gradient(circle at 30% 25%, #9de3bb, #17775c 45%, #064334 78%);
        box-shadow: 0 1px 2px #20130b;
        opacity: 0;
        pointer-events: none;
    }
    .mode-card.selected .selected-jade { opacity: 1; }
    .mode-card-name { min-width: 0; overflow-wrap: anywhere; }
    .mode-card small { margin-left: auto; font-size: 0.72em; font-weight: 400; }
    .mode-card:disabled { opacity: 0.55; cursor: not-allowed; }
    .mode-description { min-height: 0; flex: 1; overflow-y: auto; scrollbar-width: thin; line-height: 1.4; }
    .mode-description p { margin: 0 0 0.6em; }
    .mode-description ul { padding-left: 1.25em; margin: 0.4em 0 0.8em; }
    .mode-description li { margin: 0 0 0.3em; }
    .mode-data { display: flex; justify-content: space-between; gap: 0.6em; border-top: 1px solid rgb(75 44 25 / 24%); padding-top: 0.38em; }
    .confirm-button {
        position: relative;
        isolation: isolate;
        flex: 0 0 auto;
        align-self: center;
        display: grid;
        place-items: center;
        width: min(65%, 230px);
        min-height: 3.15em;
        margin-top: 0.35em;
        padding: 0.35em 1.4em;
        border: 0;
        background: transparent;
        color: #ffe6ae;
        font: inherit;
        font-weight: 800;
        text-shadow: 0 1px 2px #281309;
        cursor: pointer;
    }
    .confirm-button::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border: 14px solid transparent;
        border-image-source: url('/assets/jca/ui/game_mode_confirm_static_v1.png');
        border-image-slice: 76 120 76 120 fill;
        border-image-width: 14px 19px 14px 19px;
        border-image-repeat: stretch;
        pointer-events: none;
    }
    .confirm-button:hover:not(:disabled)::before { filter: brightness(1.12); }
    .confirm-button:active:not(:disabled) { transform: translateY(1px); }
    .confirm-button:disabled { opacity: 0.55; cursor: not-allowed; }
    .confirm-button span { overflow-wrap: anywhere; }
    .close-button {
        position: absolute;
        right: 3.4%;
        top: 4.8%;
        display: grid;
        place-items: center;
        width: clamp(34px, 4%, 52px);
        aspect-ratio: 1;
        padding: 0;
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    .close-button img { display: block; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
    .close-button:hover { filter: brightness(1.15); }
    .close-button:active { transform: translateY(1px); }
    .mode-card:focus-visible, .confirm-button:focus-visible, .close-button:focus-visible {
        outline: 3px solid #197f72;
        outline-offset: 2px;
    }
    @media (max-width: 680px), (max-height: 480px) {
        .jca-modal-root { padding: 8px; box-sizing: border-box; }
        .jca-book {
            width: min(96vw, 520px);
            height: min(95dvh, 790px);
            aspect-ratio: auto;
            display: flex;
            flex-direction: column;
            overflow: auto;
            background: linear-gradient(155deg, #e9bc78, #f7da9b);
            border: 8px ridge #865b35;
            border-radius: 12px;
            box-sizing: border-box;
        }
        .book-art { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: fill; opacity: 0.12; }
        .book-page { position: relative; top: auto; left: auto; width: auto; height: auto; padding: 14px 16px; font-size: 15px; overflow: visible; }
        .page-left { min-height: 175px; max-height: 45%; }
        .page-right { flex: 1; min-height: 200px; border-top: 2px solid #956b45; }
        .mode-list { min-height: 100px; }
        .mode-description { min-height: 90px; }
        .close-button { position: sticky; order: -1; align-self: flex-end; top: 5px; right: auto; width: 42px; margin: 6px 7px 0 0; z-index: 1; flex-shrink: 0; }
        .confirm-button { width: min(74%, 270px); }
    }
</style>
