var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "world": "Core01",
            "isOverlay": false,
            "zoomLevels": 10,
            "imgextension": "png",
            "name": "Daytime Render",
            "last_rendertime": 1597280280,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "path": "day",
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "minZoom": 0,
            "maxZoom": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "defaultZoom": 1
        }
    ],
    "map": {
        "controls": {
            "compass": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "spawn": true
        },
        "cacheTag": "1597280481",
        "debug": true,
        "north_direction": "lower-left"
    }
};
