var overviewerConfig = {
    "tilesets": [
        {
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "showlocationmarker": true,
            "isOverlay": false,
            "maxZoom": 10,
            "minZoom": 0,
            "defaultZoom": 1,
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597755480,
            "path": "day",
            "world": "Core01",
            "poititle": "Markers"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597755683",
        "controls": {
            "zoom": true,
            "compass": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "pan": true
        }
    }
};
