var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "base": "",
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "name": "Daytime Render",
            "minZoom": 0,
            "imgextension": "png",
            "path": "day",
            "maxZoom": 10,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1598612280,
            "defaultZoom": 1,
            "isOverlay": false,
            "poititle": "Markers"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598612485",
        "controls": {
            "overlays": true,
            "zoom": true,
            "pan": true,
            "mapType": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true
        }
    }
};
