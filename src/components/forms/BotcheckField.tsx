/**
 * Invisible Web3Forms honeypot field (name="botcheck").
 * Uses Tailwind `sr-only` (clip / 1px) so it never expands document scroll width.
 * Must remain unchecked / empty for legitimate users.
 */
export function BotcheckField({ id = "botcheck" }: { id?: string }) {
  return (
    <div aria-hidden="true" className="sr-only pointer-events-none">
      <label htmlFor={id}>Do not fill this field</label>
      <input
        id={id}
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        defaultChecked={false}
      />
    </div>
  );
}
