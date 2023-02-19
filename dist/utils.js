export function makeDialogTitle() {
    return `${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
}
