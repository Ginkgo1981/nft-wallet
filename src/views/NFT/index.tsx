import { Dialog, makeStyles } from '@material-ui/core'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useWidth } from '../../hooks/useWidth'
import { nftDetail } from '../../mock'
import { Appbar } from '../../components/Appbar'
import { ReactComponent as BackSvg } from '../../assets/svg/back.svg'
import { ReactComponent as ShareSvg } from '../../assets/svg/share.svg'
import { LazyLoadImage } from '../../components/Image'
import { Button } from '../../components/Button'
import { Copyzone } from '../../components/Copyzone'

const DialogContainer = styled(Dialog)`
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin: 32px 32px 16px 32px;
    text-align: center;
  }
  .action {
    display: flex;
    justify-content: center;
    margin: 32px;
  }
`

const Container = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  .figure {
    background: linear-gradient(107.86deg, #e1e1e1 7.34%, #d3d3d3 92.99%);
    padding: 16px 36px;
  }
  .detail {
    margin: 0 36px;
    .title {
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      margin-top: 16px;
    }
    .desc {
      font-size: 14px;
      line-height: 16px;
      color: rgba(0, 0, 0, 0.6);
      margin-top: 12px;
      margin-bottom: 24px;
    }
    .row {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: rgba(0, 0, 0, 0.8);
      margin-bottom: 12px;
      .underline {
        text-decoration-line: underline;
      }

      &.last {
        margin-bottom: 32px;
      }
    }
    .action {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

const useStyles = makeStyles(() => ({
  paper: { minWidth: '320px', maxWidth: '320px' },
}))

export const NFT: React.FC = () => {
  const history = useHistory()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const style = useStyles()
  const openDialog = (): void => setIsDialogOpen(true)
  const closeDialog = (): void => setIsDialogOpen(false)

  const url = location.href
  const appRef = useRef(null)
  const width = useWidth(appRef)

  const imageWidth = useMemo(() => {
    return width !== undefined ? width - 72 : 0
  }, [width])

  const detail = nftDetail

  const transfer = useCallback(() => {
    history.push(`/transfer/${detail.issuer_info.uuid}`, {
      nftDetail: detail,
    })
  }, [history, detail])

  return (
    <Container>
      <Appbar
        title="Token Detail"
        left={<BackSvg onClick={() => history.goBack()} />}
        right={<ShareSvg onClick={openDialog} />}
        ref={appRef}
      />

      <div className="figure">
        <LazyLoadImage
          src={detail.issuer_info.avatar_url}
          width={imageWidth}
          height={imageWidth}
        />
      </div>

      <section className="detail">
        <div className="title">{detail.name}</div>
        <div className="desc">{detail.description}</div>
        <div className="row">
          {detail.total === 0 ? '不限量' : `限量：${detail.total}`}
        </div>
        <div className="row last">
          发行方：<a className="underline">{detail.issuer_info.name}</a>
        </div>
        <div className="action">
          <Button type="primary" onClick={transfer}>
            转让
          </Button>
        </div>
      </section>

      <DialogContainer
        open={isDialogOpen}
        classes={{ paper: style.paper }}
        onBackdropClick={closeDialog}
      >
        <div className="title">点击复制链接并分享至社交媒体</div>
        <Copyzone text={url} displayText={url} />
        <div className="action">
          <Button onClick={closeDialog}>关闭</Button>
        </div>
      </DialogContainer>
    </Container>
  )
}
