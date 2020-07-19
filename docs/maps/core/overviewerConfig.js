var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png"
        }
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "base": "",
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 9,
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "imgextension": "png",
            "isOverlay": false,
            "name": "Daytime Render",
            "zoomLevels": 9,
            "north_direction": 0,
            "last_rendertime": 1595195880,
            "world": "Core01",
            "path": "day",
            "showlocationmarker": true,
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1595196081",
        "debug": true,
        "controls": {
            "coordsBox": true,
            "spawn": true,
            "compass": true,
            "zoom": true,
            "mapType": true,
            "pan": true,
            "overlays": true
        }
    }
};
