var overviewerConfig = {
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596398484",
        "controls": {
            "overlays": true,
            "zoom": true,
            "compass": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true,
            "mapType": true
        }
    },
    "tilesets": [
        {
            "path": "day",
            "imgextension": "png",
            "showlocationmarker": true,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "base": "",
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "world": "Core01",
            "north_direction": 0,
            "last_rendertime": 1596398280,
            "isOverlay": false,
            "poititle": "Markers",
            "maxZoom": 10
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png"
        }
    }
};
