var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        }
    },
    "tilesets": [
        {
            "zoomLevels": 10,
            "poititle": "Markers",
            "showlocationmarker": true,
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "name": "Daytime Render",
            "path": "day",
            "isOverlay": false,
            "imgextension": "png",
            "last_rendertime": 1598439480,
            "minZoom": 0,
            "maxZoom": 10
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "zoom": true,
            "mapType": true,
            "coordsBox": true,
            "overlays": true,
            "compass": true,
            "spawn": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1598439685"
    }
};
