
let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId })
{
	const hostname = window.location.hostname;

	return `wss://${hostname.split("-").slice(0, -1).join("-")}-4443.githubpreview.dev/?roomId=${roomId}&peerId=${peerId}`;
}
