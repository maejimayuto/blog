import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import CustomHead from '../components/custom-head'

const products = [
  {
    "url": "https://carpe.dev/",
    "image": "/images/Carpe.png",
    "title": "Carpe（カルぺ）",
    "description": "履歴書・職務経歴書・スキルシートなどの生成・管理アプリ",
  },
  {
    "url": "https://github.com/maejimayuto/cat-in-slack",
    "image": "/images/cat-in-slack.png",
    "title": "猫の宅急便",
    "description": "Slack のチャンネルに猫の画像をお届けするアプリ"
  }
];

const Home: NextPage = () => {
  return (
    <>
      <CustomHead titlePre="Home" />
      <div className="relative my-0 mx-auto max-w-3xl h-72">
        <Image
          src="/images/bali_01.jpg"
          alt="cover image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4 pb-8 my-0 mx-auto max-w-3xl">
        <h1 className="mt-4 text-4xl font-bold">前島 悠人</h1>
        <h2 className="text-xl font-bold">Profile</h2>
        名古屋出身。名古屋大好き東京在住。93年生まれの Web エンジニア。
        たくさんプロダクトを作って、起業家王を目指している。
        まだ物語は山賊に誘拐されているぐらいまでしか進んでいない。
        <h2 className="text-xl font-bold">Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => {
            return (
              <Link key={product.url} href={product.url} passHref>
                <a
                  target="_blank" rel="noopener noreferrer"
                  className="font-normal text-fg hover:text-fg border-0"
                >
                  <div className="hover:bg-fg-0 rounded shadow-md">
                    <div className="relative my-0 mx-auto max-w-xl h-48">
                      <Image
                        src={product.image}
                        alt="carpe"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="right top;"
                        className="rounded-t"
                      />
                    </div>
                    <div className="grid grid-rows-3 py-1 px-2.5">
                      <div className="flex">
                        <h3 className="my-0 text-sm leading-6">{product.title}</h3>
                      </div>
                      <span className="text-xs leading-6">{product.description}</span>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
        <h2 className="text-xl font-bold">Blog</h2>
        <Link href="/blog" passHref>
          <a>記事一覧</a>
        </Link>
      </div>
    </>
  )
}

export default Home
