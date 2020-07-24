var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "base": "",
            "showlocationmarker": true,
            "world": "Core01",
            "path": "day",
            "north_direction": 0,
            "last_rendertime": 1595577601,
            "name": "Daytime Render",
            "maxZoom": 9,
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 9,
            "imgextension": "png",
            "isOverlay": false
        }
    ],
    "map": {
        "cacheTag": "1595577710",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "compass": true,
            "spawn": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true
        }
    }
};
