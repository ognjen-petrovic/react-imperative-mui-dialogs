export function makeDialogTitle(): string {
    return `${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`
}