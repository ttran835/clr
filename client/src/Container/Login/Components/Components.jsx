import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import passwordInput from '../../InputFields';

import styles from '../styles/Login.module.scss';

export default function Components(props) {
  const [password, input] = passwordInput({ hint: 'Enter your secret phrase', name: 'Password' });
  console.log({ password });
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <h2 className={`${styles.inputTest}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum enim orci, eget
            porta quam luctus vel. In euismod leo mi, in tempus arcu gravida vitae. Morbi quis
            faucibus nulla. Aenean ornare nulla quis ligula ullamcorper, ut semper est congue.
            Maecenas massa ipsum, euismod et vestibulum at, malesuada ac enim. Nunc mollis erat
            vitae magna tempor mattis. Sed dictum dolor mi, sed facilisis urna elementum eu.
            Suspendisse sit amet tortor sagittis, ultrices augue non, fringilla quam. Suspendisse
            suscipit lectus at aliquet convallis. Cras porta risus vel lorem sagittis sagittis.
            Fusce sed elementum nunc. Suspendisse sem velit, sollicitudin vel scelerisque nec,
            pharetra pellentesque purus. Duis pellentesque sit amet dolor eleifend tempor.
            Suspendisse sodales dolor quam, sed vestibulum tortor ornare vitae. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque congue
            mattis feugiat. Vivamus et mi quam. Sed molestie malesuada orci iaculis rutrum. Mauris
            sapien libero, molestie in faucibus et, cursus eleifend lacus. Nam sollicitudin est ac
            leo venenatis, quis venenatis nulla luctus. Vivamus non luctus ante, id mattis elit. Sed
            commodo maximus aliquet. Ut rutrum tellus enim, suscipit consectetur lorem interdum a.
            Proin vestibulum diam pharetra, auctor turpis vitae, tincidunt mauris. Morbi sed gravida
            lectus. Sed ex leo, fringilla at imperdiet sit amet, aliquam nec arcu. Sed accumsan
            imperdiet libero, vitae fermentum libero convallis nec. Maecenas eu orci ut eros
            ullamcorper lacinia. Vestibulum finibus lorem nunc, et dictum risus consectetur id. Nam
            consectetur id dolor ac volutpat. Sed faucibus sapien a purus fermentum pellentesque.
            Pellentesque ac ultrices neque. Nulla eget egestas odio, quis vulputate odio. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque
            imperdiet, leo vel ultricies ullamcorper, leo tortor tincidunt ex, eget facilisis orci
            neque quis orci. Nam efficitur leo eu diam iaculis, et commodo enim eleifend. Ut
            molestie purus tortor, eget pretium metus pretium sit amet. Nam tempus tincidunt elit
            vitae euismod. Phasellus lobortis commodo ante id porttitor. Integer tristique bibendum
            eros id vestibulum. Quisque euismod sem ac nisi eleifend lacinia. Aliquam mattis id nunc
            sed sagittis. Proin ut nibh ligula. In faucibus dignissim libero, sed porttitor elit
            suscipit quis. Phasellus vestibulum aliquet scelerisque. Phasellus nisi lorem, pretium a
            mattis et, dignissim nec mi. Nulla augue nunc, interdum non velit vitae, lacinia dapibus
            dolor. Duis odio mi, ornare a urna sed, blandit laoreet massa. Vestibulum sed volutpat
            felis, consectetur elementum odio. Sed at lacus risus. Nullam a lacinia felis. Cras
            mollis scelerisque commodo. In eget vulputate dolor. In auctor, tellus eu sodales
            fermentum, neque lorem ornare ipsum, sed iaculis neque metus at mi. Sed sed justo augue.
            Nulla mauris purus, euismod finibus ipsum mattis, commodo sodales massa. Proin pretium
            ac leo at congue. Aenean ac tincidunt justo, nec rutrum odio. In hac habitasse platea
            dictumst. Vestibulum a feugiat justo. Pellentesque ut sapien sit amet sapien porttitor
            rhoncus non in velit. Vivamus at sagittis nibh. Quisque eu nibh ut nibh accumsan
            elementum. Mauris ac aliquam dui. Nam a interdum risus, vitae pulvinar urna. Etiam
            dictum, eros vitae imperdiet sodales, purus nunc mollis tortor, at sollicitudin ex erat
            quis sem. Integer a tempor enim. Praesent ac diam mattis, dictum sem et, tincidunt quam.
            Nunc tortor urna, pulvinar non quam at, posuere egestas dolor. Proin rhoncus mattis
            volutpat. Praesent at purus tempus, tempus ligula eu, hendrerit purus. Aliquam elementum
            a enim ut efficitur. Nunc eleifend ante nec ligula pretium, sed dapibus arcu interdum.
            In ligula odio, ultrices quis ipsum non, congue blandit purus. Donec porta nisi
            tincidunt neque pulvinar, quis tempor arcu accumsan. Aenean bibendum libero justo, eu
            egestas mauris egestas mattis. Praesent lacinia elit non sagittis blandit. Fusce
            interdum mi a auctor commodo. Suspendisse potenti. Ut vitae efficitur eros. Aliquam
            vestibulum, nisl eget vestibulum convallis, magna eros pulvinar nulla, et cursus elit
            erat eget lacus. Maecenas feugiat, ex congue blandit viverra, dui ex luctus libero, et
            mattis lorem elit id nibh. Nulla vitae ex odio. Nam molestie enim eget tempor laoreet.
            Suspendisse vel turpis sodales lacus lacinia ullamcorper nec vitae tellus. Aliquam
            egestas diam sit amet fermentum ultrices. Quisque eget facilisis ex.
          </h2>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>{input}</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
