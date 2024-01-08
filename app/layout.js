import PageLayout from './ui/PageLayout'
// import '@aws-amplify/ui-react/styles.css';

export const metadata = {
	metadataBase: new URL('https://idenbrid.jp/'),
	title: '合同会社アイデンブリッド | IDENBRID INC. | アプリ、システム開発、AWSクラウド',
	description:
		'“未来をテクノロジーでカッコよくアップデート”をスローガンにAWSクラウド環境にて、高機能なモバイル、スマホ・タブレットアプリそしてWebアプリケーション、業務システム開発、UIUXデザイン設計を高品質にて、お客様の納期内にそして開発費用もご予算に合わせご提供しています。',
	keywords: [
		'アイデンブリッド',
		'アイデン',
		'idenbrid',
		'IDENBRID',
		'アプリ',
		'モバイルアプリ',
		'業務システム',
		'ウェブアプリ',
		'Webアプリケーション',
		'スマホアプリ',
		'UIUXデザイン',
		'パキスタン',
		'ラホール',
		'南アジア',
		'オフショア',
		'オフショア開発',
		'パキスタンオフショア',
		'Pakistan Offshore',
		'system development',
		'東京開発会社',
		'アプリ開発会社',
		'システム開発会社',
		'低コストアプリ',
		'高品質アプリ',
		'低コストシステム',
		'高品質システム',
		'AWS',
		'AWS開発',
		'クラウド開発',
		'Webシステム開発',
		'スマートフォン・タブレット向けアプリケーション開発',
		'クラウドコンピューティング',
		'インフラ構築・運用',
		'システムITアーキテクチャ設計',
		'クリエイティブデザイン',
		'UIUX設計',
		'システム及びサービスの運用保守サービス',
	],
	publisher: 'https://www.facebook.com/idenbridinc',
	alternates: {
		canonical: 'https://idenbrid.jp',
	},
	openGraph: {
		title: '合同会社アイデンブリッド | IDENBRID INC. | アプリ、システム開発、AWSクラウド',
		description:
			'“未来をテクノロジーでカッコよくアップデート”をスローガンにAWSクラウド環境にて、高機能なモバイル、スマホ・タブレットアプリそしてWebアプリケーション、業務システム開発、UIUXデザイン設計を高品質にて、お客様の納期内にそして開発費用もご予算に合わせご提供しています。',
		url: 'https://idenbrid.jp/',
		siteName: '合同会社アイデンブリッド | IDENBRID INC. | アプリ、システム開発、AWSクラウド',
	},
	icons: {
		icon: '/favicons.ico',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang='ja'>
			<head>
				<link rel='stylesheet' href='https://use.typekit.net/wlg4kli.css' />
			</head>
			<body>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	)
}
