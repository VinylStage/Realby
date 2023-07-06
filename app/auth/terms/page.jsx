import React from "react";

import "@styles/elisa-terms.css";
import Link from "next/link";
import Image from "next/image";

/** 약관 페이지 */
const Terms = () => {
  return (
    <>
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/realby_logo.png"
          alt="Realby Logo"
          width={90}
          height={30}
          className="object-contain"
        />
      </Link>
      <form action="" id="joinForm">
        <ul class="join_box">
          <li class="checkBox check01">
            <ul class="clearfix">
              <li>전체 동의하기</li>
              <li class="checkAllBtn">
                <input type="checkbox" name="chkAll" id="chk" class="chkAll" />
              </li>
            </ul>
          </li>
          <li class="checkBox check02">
            <ul class="clearfix">
              <li>[필수] Realby 이용약관</li>
              <li class="checkBtn">
                <input type="checkbox" name="chk" />
              </li>
            </ul>
            <textarea name="" id="">
              여러분을 환영합니다. Realby 서비스 및 제품(이하 ‘서비스’)을 이용해
              주셔서 감사합니다. 본 약관은 다양한 Realby 서비스의 이용과
              관련하여 Realby 서비스를 제공하는 Realby 주식회사(이하 ‘Realby’)와
              이를 이용하는 Realby 서비스 회원(이하 ‘회원’) 또는 비회원과의
              관계를 설명하며, 아울러 여러분의 Realby 서비스 이용에 도움이 될 수
              있는 유익한 정보를 포함하고 있습니다.
            </textarea>
          </li>
          <li class="checkBox check03">
            <ul class="clearfix">
              <li>[필수] 개인정보 수집 및 이용</li>
              <li class="checkBtn">
                <input type="checkbox" name="chk" />
              </li>
            </ul>

            <textarea name="" id="">
              여러분을 환영합니다. Realby 서비스 및 제품(이하 ‘서비스’)을 이용해
              주셔서 감사합니다. 본 약관은 다양한 Realby 서비스의 이용과
              관련하여 Realby 서비스를 제공하는 Realby 주식회사(이하 ‘Realby’)와
              이를 이용하는 Realby 서비스 회원(이하 ‘회원’) 또는 비회원과의
              관계를 설명하며, 아울러 여러분의 Realby 서비스 이용에 도움이 될 수
              있는 유익한 정보를 포함하고 있습니다.
            </textarea>
          </li>
          <li class="checkBox check03">
            <ul class="clearfix">
              <li>[선택] 위치기반서비스 이용약관</li>
              <li class="checkBtn">
                <input type="checkbox" name="chk" />
              </li>
            </ul>

            <textarea name="" id="">
              여러분을 환영합니다. Realby 서비스 및 제품(이하 ‘서비스’)을 이용해
              주셔서 감사합니다. 본 약관은 다양한 Realby 서비스의 이용과
              관련하여 Realby 서비스를 제공하는 Realby 주식회사(이하 ‘Realby’)와
              이를 이용하는 Realby 서비스 회원(이하 ‘회원’) 또는 비회원과의
              관계를 설명하며, 아울러 여러분의 Realby 서비스 이용에 도움이 될 수
              있는 유익한 정보를 포함하고 있습니다.
            </textarea>
          </li>
          <li class="checkBox check04">
            <ul class="clearfix">
              <li>[선택] 이벤트 및 해택 정보 수신</li>
              <li class="checkBtn">
                <input type="checkbox" name="chk" />
              </li>
            </ul>
          </li>
        </ul>
        <ul class="footBtwrap clearfix">
          <li>
            <Link href="/auth/signup">
              <button class="fpmgBt2">다음</button>
            </Link>
          </li>
        </ul>
      </form>
    </>
  );
};

export default Terms;
