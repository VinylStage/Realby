"use client";

import "../../../styles/elisa-terms.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

/** 약관 페이지 */
const Terms = () => {
  const router = useRouter();

  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isChecked, setIsChecked] = useState({
    chk1: false,
    chk2: false,
    chk3: false,
    chk4: false,
    chk5: false,
  });

  const handleCheckAll = () => {
    const updatedCheckedState = {
      chk1: !isCheckedAll,
      chk2: !isCheckedAll,
      chk3: !isCheckedAll,
      chk4: !isCheckedAll,
      chk5: !isCheckedAll,
    };
    setIsCheckedAll(!isCheckedAll);
    setIsChecked(updatedCheckedState);
  };

  const handleCheck = (name) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleNext = () => {
    const requiredChecks = ["chk2", "chk3"];
    const allRequiredChecked = requiredChecks.every(
      (check) => isChecked[check]
    );

    if (allRequiredChecked) {
      router.push("/auth/signup"); // 필수약관에 모두 동의할 경우 회원가입 페이지로 이동
    } else {
      alert("필수약관에 모두 동의해주세요.");
    }
  };

  return (
    <>
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/realby_logo/realby-color-R.png"
          alt="Realby Logo"
          width={200}
          height={50}
          className="object-contain"
        />
      </Link>

      <ul className="join_box">
        <li className="checkBox check01">
          <ul className="clearfix">
            <li>전체 동의하기</li>
            <li className="checkAllBtn">
              <input
                type="checkbox"
                name="chkAll"
                id="chk"
                className="chkAll"
                checked={isCheckedAll}
                onChange={handleCheckAll}
              />
            </li>
          </ul>
        </li>
        <li className="checkBox check02">
          <ul className="clearfix">
            <li>[필수] Realby 이용약관</li>
            <li className="checkBtn">
              <input
                type="checkbox"
                name="chk"
                checked={isChecked.chk2}
                onChange={() => handleCheck("chk2")}
              />
            </li>
          </ul>
          <textarea
            name=""
            id=""
            value="여러분을 환영합니다. Realby 서비스 및 제품(이하 ‘서비스’)을 이용해
            주셔서 감사합니다. 본 약관은 다양한 Realby 서비스의 이용과 관련하여
            Realby 서비스를 제공하는 Realby 주식회사(이하 ‘Realby’)와 이를
            이용하는 Realby 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를
            설명하며, 아울러 여러분의 Realby 서비스 이용에 도움이 될 수 있는
            유익한 정보를 포함하고 있습니다."
          ></textarea>
        </li>
        <li className="checkBox check03">
          <ul className="clearfix">
            <li>[필수] 개인정보 수집 및 이용</li>
            <li className="checkBtn">
              <input
                type="checkbox"
                name="chk"
                checked={isChecked.chk3}
                onChange={() => handleCheck("chk3")}
              />
            </li>
          </ul>

          <textarea
            name=""
            id=""
            value="여러분을 환영합니다. Realby 서비스 및 제품(이하 ‘서비스’)을 이용해
            주셔서 감사합니다. 본 약관은 다양한 Realby 서비스의 이용과 관련하여
            Realby 서비스를 제공하는 Realby 주식회사(이하 ‘Realby’)와 이를
            이용하는 Realby 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를
            설명하며, 아울러 여러분의 Realby 서비스 이용에 도움이 될 수 있는
            유익한 정보를 포함하고 있습니다."
          ></textarea>
        </li>
        <li className="checkBox check04">
          <ul className="clearfix">
            <li>[선택] 위치기반서비스 이용약관</li>
            <li className="checkBtn">
              <input
                type="checkbox"
                name="chk"
                checked={isChecked.chk4}
                onChange={() => handleCheck("chk4")}
              />
            </li>
          </ul>
          <textarea
            name=""
            id=""
            value=" 여러분을 환영합니다. Realby 서비스 및 제품(이하 ‘서비스’)을 이용해
            주셔서 감사합니다. 본 약관은 다양한 Realby 서비스의 이용과 관련하여
            Realby 서비스를 제공하는 Realby 주식회사(이하 ‘Realby’)와 이를
            이용하는 Realby 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를
            설명하며, 아울러 여러분의 Realby 서비스 이용에 도움이 될 수 있는
            유익한 정보를 포함하고 있습니다."
          ></textarea>
        </li>
        <li className="checkBox check05">
          <ul className="clearfix">
            <li>[선택] 이벤트 및 해택 정보 수신</li>
            <li className="checkBtn">
              <input
                type="checkbox"
                name="chk"
                checked={isChecked.chk5}
                onChange={() => handleCheck("chk5")}
              />
            </li>
          </ul>
          <textarea
            name=""
            id=""
            value="여러분을 환영합니다. Realby 서비스 및 제품(이하 ‘서비스’)을 이용해
            주셔서 감사합니다. 본 약관은 다양한 Realby 서비스의 이용과 관련하여
            Realby 서비스를 제공하는 Realby 주식회사(이하 ‘Realby’)와 이를
            이용하는 Realby 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를
            설명하며, 아울러 여러분의 Realby 서비스 이용에 도움이 될 수 있는
            유익한 정보를 포함하고 있습니다."
          ></textarea>
        </li>
      </ul>
      <ul className="footBtwrap clearfix">
        <button className="fpmgBt2" onClick={handleNext}>
          다음
        </button>
      </ul>
    </>
  );
};

export default Terms;
