var overviewerConfig = {
    "map": {
        "controls": {
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "overlays": true,
            "mapType": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599314486"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "showlocationmarker": true,
            "isOverlay": false,
            "defaultZoom": 1,
            "zoomLevels": 10,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "last_rendertime": 1599314280,
            "name": "Daytime Render",
            "maxZoom": 10,
            "minZoom": 0,
            "imgextension": "png",
            "poititle": "Markers"
        }
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    }
};
