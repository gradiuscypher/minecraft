var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        }
    },
    "tilesets": [
        {
            "defaultZoom": 1,
            "poititle": "Markers",
            "imgextension": "png",
            "name": "Daytime Render",
            "base": "",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "path": "day",
            "minZoom": 0,
            "world": "Core01",
            "last_rendertime": 1597406280,
            "maxZoom": 10,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1597406481",
        "controls": {
            "pan": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "spawn": true,
            "mapType": true
        },
        "north_direction": "lower-left"
    }
};
